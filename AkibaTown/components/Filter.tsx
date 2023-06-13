import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { FakeSubjects, Categories } from "../constants/FakeSubjects";
import { initialFilter } from "../constants/InitialFilter";

const Filter = ({ navigation }: any) => {

    const [subjects, setSubjects] = useState([]);
    const [filter, setFilter] = useState(initialFilter);
    const [intermediateFilter, setIntermediateFilter] = useState(initialFilter);
    const [modalVisible, setModalVisible] = useState(false);

    let filterSubjects;
    let filterArray: any[] = [];
    let empty;

    if(filterSubjects != undefined && typeof filterSubjects === 'object') {
        FakeSubjects.map((item) => {
            if(filter.category != '' && !filter.category.includes(filter.category)) {
                return;
            }

            filterArray.push(item);
        })

        if(filterArray.length > 0) {
            filterSubjects = filterArray;
        }
    }
    else {
        filterSubjects = false;
        empty = true;
    }


    return (
        <View>
            <Button title="Test filter" />
        </View>
    )
}

export default Filter;