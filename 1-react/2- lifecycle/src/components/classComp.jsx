import { Component } from 'react';

class Sayac extends Component {
  // kurucu method
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log('Constructor çalıştı');
  }

  //! bileşnin ekrana basılma anını izler
  componentDidMount() {
    console.log('componentDidMount çalıştı');
  }

  //! bilşenin güncellenme olayını izler
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate çalıştı');
  }

  //! bileşenin ekrandan ayrılma olayı
  componentWillUnmount() {
    console.log('componentWillUnmount çalıştı');
  }

  // state'i güncelleme
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // arayüzü ekrana basar
  render() {
    console.log('Render Çalıştı');
    return (
      <div className="d-flex justify-content-center gap-4 mt-5">
        <button className="btn btn-warning">Azalt</button>
        <span className="fs-1">{this.state.count}</span>
        <button
          onClick={this.handleClick}
          className="btn btn-success"
        >
          Arttır
        </button>
      </div>
    );
  }
}

export default Sayac;
