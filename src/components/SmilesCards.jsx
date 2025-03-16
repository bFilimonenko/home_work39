import React from "react";
import { SmileCard } from "./SmileCard.jsx";
import "./SmileCard.css";

export class SmilesCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { smiles: [], isLoading: true };
  }

  componentDidMount() {
    fetch("http://localhost:3001/Smiles.json")
      .then(response => response.json())
      .then(data => this.setState({ smiles: data, isLoading: false }));
  }

  render() {
    return (
      <div className="smiles-cards-container">
        {this.state.smiles.map(item => <SmileCard key={item.id} smile={item} onVote={this.props.onVote}></SmileCard>)}
      </div>
    );
  }

}