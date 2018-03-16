import * as AirbnbPropTypes from "airbnb-prop-types";

interface Props {
    and: any;
    between: any;
    childrenHavePropXorChildren: any;
    childrenOf: any;
    childrenSequenceOf: any;
    componentWithName: any;
    elementType: any;
    explicitNull: any;
    forbidExtraProps: any;
    integer: any;
    keysOf: any;
    mutuallyExclusiveProps: any;
    mutuallyExclusiveTrueProps: any;
    nChildren: any;
    nonNegativeInteger: any;
    nonNegativeNumber: any;
    numericString: any;
    object: any;
    or: any;
    range: any;
    restrictedProp: any;
    sequenceOf: any;
    shape: any;
    uniqueArray: any;
    uniqueArrayOf: any;
    valuesOf: any;
    withShape: any;

}

const airbnbPropTypes: AirbnbPropTypes.ValidationMap<Props> = {
    and: AirbnbPropTypes.and([AirbnbPropTypes.explicitNull()]).isRequired,
    between: AirbnbPropTypes.between({ gt({ min }) { return min; }}).isRequired,
    childrenHavePropXorChildren: AirbnbPropTypes.childrenHavePropXorChildren('foo').isRequired,
};

// const propTypes: PropTypes.ValidationMap<Props> = {
//     any: PropTypes.any.isRequired,
//     array: PropTypes.array.isRequired,
//     bool: PropTypes.bool.isRequired,
//     func: PropTypes.func.isRequired,
//     number: PropTypes.number.isRequired,
//     object: PropTypes.object.isRequired,
//     string: PropTypes.string.isRequired,
//     symbol: PropTypes.symbol.isRequired,
//     node: PropTypes.node.isRequired,
//     element: PropTypes.element.isRequired
// };
