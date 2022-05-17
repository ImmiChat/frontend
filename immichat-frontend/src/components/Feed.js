import Post from './Post'

const Feed = (props) => {
    const array = [
        {name:'Ray Lu', updated_at:'5 min ago', body:'This is dope', likes:10, comments:10},
        {name:'Ray Lu', updated_at:'5 min ago', body:'This is dope', likes:10, comments:10},
        {name:'Ray Lu', updated_at:'5 min ago', body:'This is dope', likes:10, comments:10},
        {name:'Ray Lu', updated_at:'5 min ago', body:'This is dope', likes:10, comments:10},
        {name:'Ray Lu', updated_at:'5 min ago', body:'This is dope', likes:10, comments:10}
    ]

    return (  
        <div className="border-top border-secondary w-75 m-auto mt-5 py-5">
            <div>
                {array.map(info => (<Post info={info}/>))}
            </div>
        </div>
    );
}
 
export default Feed;