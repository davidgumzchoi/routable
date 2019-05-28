import { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';

import Issue from './Issue';
const SidebarNoSSR = dynamic(import('./Sidebar'), { ssr: false });

import WrapperStyles from './../styles/WrapperStyles';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  background: isDragging ? '#5582fa' : '#eee',
  borderRadius: '0.25rem',
  border: '1px solid #ccc',
  margin: '1rem',
  padding: '1rem',
  ...draggableStyle
});

export default class Issues extends Component {
  state = {
    items: [],
    username: '',
    token: ''
  };

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);

    this.setState({
      items
    });
    localStorage.setItem('issues', JSON.stringify(items));
  };

  getIssues = () => {
    fetch(`https://api.github.com/search/issues?q=${this.state.username}`, {
      headers: {
        Authorization: `token ${this.state.token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        this.setState({ items: data.items });
        localStorage.setItem('issues', JSON.stringify(data.items));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    const issues = JSON.parse(localStorage.getItem('issues'));
    if (issues === undefined || issues === 'undefined') {
      this.getIssues();
    } else {
      this.setState({ items: issues });
    }
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps === undefined) {
      return false;
    }
    this.getIssues(prevProps);
  }

  // componentWillUnmount() {
  //   localStorage.setItem('issues', this.state.items);
  // }

  setForm = sidebarState => {
    const { token, username } = sidebarState;
    this.setState({ token, username, error: false });
    setTimeout(() => this.getIssues(), 0);
  };

  render() {
    const { items } = this.state;
    return (
      <WrapperStyles>
        <SidebarNoSSR getForm={this.setForm} />

        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items &&
                  items.map((issue, index) => (
                    <Draggable key={issue.id} draggableId={issue.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          <Issue issue={issue} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </WrapperStyles>
    );
  }
}
