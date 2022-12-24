import React from 'react'

// this is another way of writing stateless function components
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span> {/* Output: FRESH SESFOOD MARKET */}
    </h3>
  </header>
)

//* COMPARE THESE TWO WAY OF WRITING THEM 👆👇 Same result with slight difference in writing the code.

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span> {/* Output: FRESH SESFOOD MARKET */}
//         </h3>
//       </header>
//     )
//   }
// }

export default Header
