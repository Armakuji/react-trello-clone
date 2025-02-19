import { Button } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Detail, SaveButton, StyledTextArea } from '../styles';

export class CardDescription extends Component {
    state = {
        description: '',
        editMode: false,
    };

    handleEnableEditMode = () => {
        const { description } = this.props.card;
        this.setState({
            description,
            editMode: true,
        });
    };

    handleDisableEditMode = () => {
        this.setState({
            editMode: false,
        });
    };

    handleSubmitForm = (event, callback, listKey, cardKey, card) => {
        event.preventDefault();

        callback(listKey, cardKey, { ...card, description: this.state.description }).then(() => {
            this.handleDisableEditMode();
        });
    };

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    };

    render() {
        const { editMode } = this.state;
        const { listKey, card, onEditCard } = this.props;
        const isValid = this.state.description;
        return (
            <div>
                {editMode ? (
                    <form
                        onSubmit={(event) =>
                            this.handleSubmitForm(event, onEditCard, listKey, card.key, card)
                        }
                    >
                        <StyledTextArea
                            onChange={(event) => this.handleDescriptionChange(event)}
                            value={this.state.description}
                            autoSize
                        />
                        <SaveButton
                            disabled={!isValid}
                            onClick={(event) =>
                                this.handleSubmitForm(event, onEditCard, listKey, card.key, card)
                            }
                        >
                            Save
                        </SaveButton>
                        <Button onClick={this.handleDisableEditMode}>Cancel</Button>
                    </form>
                ) : (
                    <DescriptionPlaceholder onClick={this.handleEnableEditMode}>
                        {card.description ? (
                            <span>{card.description}</span>
                        ) : (
                            <Detail>Add a more detailed description...</Detail>
                        )}
                    </DescriptionPlaceholder>
                )}
            </div>
        );
    }
}

const DescriptionPlaceholder = styled.div``;
