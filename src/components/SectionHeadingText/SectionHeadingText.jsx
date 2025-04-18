import PropTypes from 'prop-types';

const SectionHeadingText = ({headingText}) => {
    return (
        <h2 className="font-semibold capitalize text-xl sm:text-2xl lg:text-3xl">{headingText}</h2>
    )
}

export default SectionHeadingText;

SectionHeadingText.propTypes = {
    headingText: PropTypes.string,
}