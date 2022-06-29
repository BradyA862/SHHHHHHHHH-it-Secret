import {useDispatch, useSelector} from "react-redux";
import Role from "./components/Role";
import Editor from "./components/Editor/Editor";
import Follower from "./components/Follower/Follower";

function App({
                 _useSelector = useSelector,
                 _useDispatch = useDispatch,
                 RoleI = Role,
                 EditorX = Editor,
                 FollowerX = Follower
             }) {
    const editor = _useSelector(state => state.editorReducer.editor)
    const follower = _useSelector(state => state.followerReducer.follower)




    if (editor === true) {
        return <EditorX/>
    }
    else if (follower === true) {
            return <FollowerX/>
        }
        else {
            return <div style={{
                position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%'
            }}>
                <RoleI/>
            </div>
        }
    }


export default App;