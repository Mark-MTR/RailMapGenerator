import { Box, Checkbox, Heading } from '@chakra-ui/react';
import React from 'react';
import RmgButtonGroup from '../../common/rmg-button-group';
import { useAppSelector } from '../../../redux';
import { Facilities, RmgStyle, Services } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import { updateStationFacility, updateStationLoopPivot, updateStationServices } from '../../../redux/param/action';
import { RmgFields, RmgFieldsField } from '@railmapgen/rmg-components';

export default function MoreSection() {
    const dispatch = useDispatch();

    const selectedStation = useAppSelector(state => state.app.selectedStation);
    const style = useAppSelector(state => state.param.style);
    const { services, facility, loop_pivot } = useAppSelector(state => state.param.stn_list[selectedStation]);

    const serviceSelections = Object.values(Services).map(service => {
        return {
            label: service,
            value: service,
            disabled: service === Services.local && style !== RmgStyle.SHMetro,
        };
    });

    const mtrFacilityOptions = {
        [Facilities.none]: 'None',
        [Facilities.airport]: 'Airport',
        [Facilities.hsr]: 'High speed rail',
        [Facilities.disney]: 'Disneyland resort',
    };

    const shmetroFacilityOptions = {
        [Facilities.none]: 'None',
        [Facilities.airport]: 'Airport',
        [Facilities.railway]: 'National rail',
        [Facilities.disney]: 'Disneyland resort',
    };

    const fields: RmgFieldsField[] = [
        {
            type: 'custom',
            label: 'Train services',
            component: (
                <RmgButtonGroup
                    selections={serviceSelections}
                    defaultValue={services}
                    onChange={services => dispatch(updateStationServices(selectedStation, services))}
                    multiSelect
                />
            ),
            hidden: ![RmgStyle.GZMTR, RmgStyle.SHMetro].includes(style),
        },
        {
            type: 'select',
            label: 'Nearby facility',
            value: facility,
            options: style === RmgStyle.MTR ? mtrFacilityOptions : shmetroFacilityOptions,
            onChange: value => dispatch(updateStationFacility(selectedStation, value as Facilities)),
            hidden: ![RmgStyle.MTR, RmgStyle.SHMetro].includes(style),
        },
    ];
    const loopFields: RmgFieldsField[] = [
        {
            type: 'custom',
            label: 'Pivot station of a loop line',
            component: (
                <Checkbox
                    variant="flushed"
                    size="sm"
                    h={6}
                    defaultChecked={loop_pivot}
                    onChange={({ target: { checked } }) => dispatch(updateStationLoopPivot(selectedStation, checked))}
                />
            ),
        },
    ];

    return (
        <Box p={1}>
            <Heading as="h5" size="sm">
                More
            </Heading>

            <RmgFields fields={fields} />
            <RmgFields fields={loopFields} />
        </Box>
    );
}
