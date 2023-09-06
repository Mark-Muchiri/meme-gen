import propTypes from 'prop-types'

export default function Joke(props) {
    Joke.propTypes = {
        setup: propTypes.string,
        punchline: propTypes.string,
    }
        /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
        return (
            <div>
                {props.setup && <h3>{props.setup}</h3>}
                <p>{props.punchline}</p>
                <hr />
            </div>
        )
}