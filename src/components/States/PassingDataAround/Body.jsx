import propTypes from 'prop-types'
export default function Body(props) {
    Body.propTypes = {
        user: propTypes.string.isRequired,
    }
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}
