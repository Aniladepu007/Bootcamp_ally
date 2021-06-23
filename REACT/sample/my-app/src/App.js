import React, { Component } from "react";
import "./App.css"
import axios from "axios";

export default class CardsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesList: [],
      loader: true
    };
  }

  componentDidMount() {
      setTimeout(() => {
      fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ moviesList: res.Search , loader:false});
      });
    }, 500);
    // setTimeout(() => {
    // axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
    //     .then((res) => {
    //         this.setState({moviesList: res.Search, loader:false})
    //     });
    // }, 3000);
  }

  render() {
    const { moviesList:list, loader } = this.state;
    console.log(list);
    return(
    <div className="movies">
        {loader ? (<h1>Loading...</h1>) :
        (
            Array.isArray(list) &&
            list.length &&
            list.map(({Title, Year, Poster})=> {
                return(
                    <div className="movie">
                        <h2>{Title}</h2>
                        <div>
                            <img src={Poster} width="200" height="250" alt={Title} />
                        </div>
                        <p>{Year}</p>
                    </div>
                );
            })
        )}
    </div>
    );
}

}


// class App extends Component {
//   state = {
//     loader: true,
//     products: [],
//   };

//   componentDidMount() {
//     fetch("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
//       .then((res) => res.json())
//       .then((res) => {
//         this.setState({
//           products: res,
//           loader: false,
//         });
//       });
//   }

//   render() {
//     const { loader, products } = this.state;
//     return (
//       <div>
//         <h1>App</h1>
//         <Counter />
//         {loader ? (
//           <h1>Loading...</h1>
//         ) : (
//           products.length &&
//           products.map(({ name, preview }) => (
//             <div>
//               <img src={preview} width="200" alt={name} />
//               <h1
//                 onClick={() => {
//                   console.log(name);
//                 }}
//               >
//                 {name}
//               </h1>
//             </div>
//           ))
//         )}
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from "react";

// class MyCount extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(this.state.count, nextState.count);
//     if (nextState.count < 0 || nextState.count > 5) {
//       if (nextState.count >= 6) {
//         nextState.count = 5;
//       } else {
//         nextState.count = 0;
//       }
//       return false;
//     } else {
//       return true;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           +
//         </button>
//         &nbsp;
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           -
//         </button>
//       </div>
//     );
//   }
// }
// export default MyCount;