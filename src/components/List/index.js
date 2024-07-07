import { StyleSheet, FlatList, View, Text } from "react-native"

const data = [{
    id: 1,
    name: 'Tap & Masukkan Nomor Urut Peserta ',
    bib: 0,
    category: 'wave 1'
}, {
    id: 2,
    name: 'Amir',
    bib: 0,
    category: 'wave 1'
}, {
    id: 3,
    name: 'Amir',
    bib: 0,
    category: 'wave 1'
}, {
    id: 4,
    name: 'Amir',
    bib: 0,
    category: 'wave 1'
}]

const EntryHeader = () => {
    return (
        <View style={EntryHeaderStyles.container}>
            <Text style={[{ width: "5%", ...EntryHeaderStyles.text }]}>Seq No</Text>
            <Text style={[{ width: "10%", ...EntryHeaderStyles.text }]}>BIB</Text>
            <Text style={[{ width: "100%", ...EntryHeaderStyles.text }]}>Nama</Text>
            <Text style={[{ width: "50%", ...EntryHeaderStyles.text }]}>category</Text>
            <Text style={[{ width: "20%", ...EntryHeaderStyles.text }]}>clock</Text>
        </View>
    )
}

const EntryHeaderStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontWeight: 700
    }
})

const EntryTimedList = () => {
    return (
        <FlatList
            data={data}
            style={{ flex: 1, width: "100%", height: 50 }}
            ListHeaderComponent={<EntryHeader />}
            // numColumns={5}
            horizontal={false}
            renderItem={({ item, index }) => {                
                return (
                    <View style={EntryTimedListStyles.ItemContainer}>
                        <View style={EntryTimedListStyles.positionBox}>
                            <Text style={EntryTimedListStyles.positionBoxText}>
                                {index + 1}
                            </Text>
                        </View>
                        <Text style={{ width: "10%" }}>{item.bib}</Text>
                        <Text style={{ width: "100%" }}>{item.name}</Text>
                        <Text style={{ width: "50%" }}>{item.category}</Text>
                        <Text style={{ width: "20%" }}>0</Text>
                    </View>
                )
            }}
            keyExtractor={(item) => item.id} />
    )
}

const EntryTimedListStyles = StyleSheet.create({
    ItemContainer: {
        flex: 1,
        width: "100%",
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        padding: 20,
        columnGap:10
    },
    positionBox: {
        width: "2%",
        height: 30,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FF0000",
        borderRadius: 4
    },
    positionBoxText: {
        fontSize: 13,
        fontWeight:'500'
    }
})

export default EntryTimedList;