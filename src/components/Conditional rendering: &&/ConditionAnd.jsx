import './ConditionAnd.css';
import jokesData from '../../data/jokesData'
import Joke from './Jokes'

export default function ConditionAnd() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}