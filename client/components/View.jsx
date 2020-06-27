import React, {Component} from 'react' 
import Search from './Search.jsx';
import Posts from './Posts.jsx';
import Create from './Create.jsx'

class View extends Component {
    render() {
        return (
            <div>
                 <Search />
                 <Posts />
                 <Create />
            </div>
        )
    }
}
export default View 