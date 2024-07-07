import { StyleSheet, View, Text, FlatList } from "react-native";
import { render } from "react-native-web";

const TableHeader = ({ columns }) => {
  if (!columns)
    return (
      <View>
        <Text>No Column</Text>
      </View>
    );

  return (
    <View style={TableHeaderStyle.container}>
      {columns.map((column, i) => (
        <Text
          key={i}
          style={[
            {
              width: column.width ? `${column.width}%` : "100%",
              ...TableHeaderStyle.text,
            },
          ]}
        >
          {column.name}
        </Text>
      ))}
    </View>
  );
};

const TableHeaderStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    // backgroundColor:"green",
    gap: 5,
  },
  text: {
    fontWeight: 700,
  },
});

const Table = ({ columns, data, rowActions }) => {
    const renderRowActions = () => {
        const { openAction, deleteAction } = rowActions
        const args = {
            url:"event"
        }
        return openAction({ args });
  }
    return (
    <FlatList
      style={TableStyle.table}
      data={data}
      ListHeaderComponent={<TableHeader columns={columns} />}
      horizontal={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <View key={index} style={EntryTimedListStyles.ItemContainer}>
           
            {columns.map((col, idx) => (
              <Text
                key={idx}
                style={{ width: col.width ? `${col.width}%` : "100%" }}
              >
                {item[col.id]}
              </Text>
            ))}
            {renderRowActions()}
            {/* <Text style={{ width: "20%" }}>{item.name}</Text>
            <Text style={{ width: "20%" }}>{item.age}</Text>
            <Text style={{ width: "20%" }}>{item.category}</Text> */}
          </View>
        );
      }}
    />
  );
};

const TableStyle = StyleSheet.create({
  table: {
    width: "100%",
    height: 50,
  },
});

const EntryTimedListStyles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    padding: 20,
    columnGap: 10,
  },
  positionBox: {
    width: "2%",
    height: 30,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF0000",
    borderRadius: 4,
  },
  positionBoxText: {
    fontSize: 13,
    fontWeight: "500",
  },
});

export default Table;
