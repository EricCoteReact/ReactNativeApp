import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Row from './Row';
import { connect } from 'react-redux'
import { getUsers, createUser } from './actions/actions.js'

class ListViewDemo extends Component {
    constructor(props) {
        super(props);
   
        this.props.getUsers();
    }

    componentDidMount() {

    }

    render() {

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginTop: 44,
                backgroundColor: 'pink',
                flexDirection: 'row',

            },
            item: {
                padding: 10,
                fontSize: 18,
                height: 100,
            },
        })

console.log(this.props.users)

        return (
            <View style={styles.container}>
                <FlatList

                    data={this.props.users}
                    renderItem={(user) => <Row user={user} />}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        );
    }
}
const mapStateToProps = (state) => ({ users: state.users });
const mapDispatchToProps = { getUsers, createUser };

export default connect(mapStateToProps, mapDispatchToProps)(ListViewDemo);