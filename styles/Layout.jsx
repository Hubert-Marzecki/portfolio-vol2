import { useSelector, useDispatch } from 'react-redux'
import {selectStyle } from '../lib/slices/styleSlice';

function Layout(props) {
const styles = useSelector(selectStyle);
const dispatch = useDispatch();
console.log(styles);
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.8;
            font-family: sans-serif;
            transition: all 0.5s ease;
            background-color: ${styles.bgColor};
            hyphens: none;
          }
          h1 {
            font-weight: 700;
          }
          p {
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
  
  export default Layout