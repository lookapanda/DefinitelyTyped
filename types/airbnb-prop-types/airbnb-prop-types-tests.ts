import { ReactInstance } from 'react';
import * as AirbnbPropTypes from 'airbnb-prop-types';

interface Props {
    and: any;
    between: any;
    childrenHavePropXorChildren: any;
    childrenOf: any;
    childrenOfType: any;
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
    childrenOf: AirbnbPropTypes.childrenOf(AirbnbPropTypes.explicitNull()).isRequired,
    childrenOfType: AirbnbPropTypes.childrenOfType('*', 'div').isRequired,
    childrenSequenceOf: AirbnbPropTypes.childrenSequenceOfValidator({ validator: AirbnbPropTypes.explicitNull(), min: 1, max: 2 }).isRequired,
    componentWithName: AirbnbPropTypes.componentWithName('test').isRequired,
    elementType: AirbnbPropTypes.elementType(Component).isRequired,
    explicitNull: AirbnbPropTypes.explicitNull().isRequired,
    forbidExtraProps: AirbnbPropTypes.forbidExtraProps({ test: AirbnbPropTypes.explicitNull() }).isRequired,
    integer: AirbnbPropTypes.integer().isRequired,
    keysOf: AirbnbPropTypes.keysOf(AirbnbPropTypes.explicitNull(), 'keysOf').isRequired,
    mutuallyExclusiveProps: AirbnbPropTypes.mutuallyExclusiveProps(AirbnbPropTypes.explicitNull(), 'foo', 'bar').isRequired,
    mutuallyExclusiveTrueProps: AirbnbPropTypes.mutuallyExclusiveTrueProps('foo', 'bar').isRequired,
    nChildren: AirbnbPropTypes.nChildren(1, AirbnbPropTypes.explicitNull()).isRequired,
    nonNegativeInteger: AirbnbPropTypes.nonNegativeInteger.isRequired,
    nonNegativeNumber: AirbnbPropTypes.nonNegativeNumber().isRequired,
    numericString: AirbnbPropTypes.numericString().isRequired,
    object: AirbnbPropTypes.object().isRequired,
    or: AirbnbPropTypes.or([AirbnbPropTypes.integer().isRequired, AirbnbPropTypes.object().isRequired], 'or').isRequired,
    range: AirbnbPropTypes.range(1, 2).isRequired,
    restrictedProp: AirbnbPropTypes.restrictedProp(() => 'Some message').isRequired,
    sequenceOf: AirbnbPropTypes.sequenceOf({ validator: AirbnbPropTypes.explicitNull(), min: 1, max: 2 }).isRequired,
    shape: AirbnbPropTypes.shape({ test: AirbnbPropTypes.explicitNull() }).isRequired,
    uniqueArray: AirbnbPropTypes.uniqueArray().isRequired,
    uniqueArrayOf: AirbnbPropTypes.uniqueArrayof(AirbnbPropTypes.explicitNull(), () => {}, 'test').isRequired,
    valuesOf: AirbnbPropTypes.valuesOf(AirbnbPropTypes.explicitNull()).isRequired,
    withShape: AirbnbPropTypes.withShape(AirbnbPropTypes.explicitNull(), { length: AirbnbPropTypes.range(1, 2) }).isRequired
};
