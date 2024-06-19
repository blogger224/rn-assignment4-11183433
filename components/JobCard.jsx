import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import facebook from "../assets/Icons/facebook.png";

export default function JobCard({ job, backgroundColor }) {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ backgroundColor: "white", padding: 20, borderRadius: 50}}>
                    <Image source={job.icon} style={{ height: 50, width: 50 }} />
                </View>
                <View style={{ paddingHorizontal: 5}}>
                    <Text style={styles.title}>{job.title}</Text>
                    <Text style={styles.company}>{job.company}</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", color: "white"}}>
                <Text style={styles.salary}>{job.salary}</Text>
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </View>

    );
}



const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: 'white',
        marginVertical: 20,
        marginHorizontal: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: 180,
        width: 300
    },


    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
    },
    company: {
        fontSize: 16,
        color: 'whiteSmoke',
        paddingVertical: 5
    },
    location: {
        fontSize: 14,
        color: 'white',
    },

    salary: {
        color: "white"
    }
});



// JobCard.js
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// export default function JobCard({ job, backgroundColor }) {
//   return (
//     <View style={[styles.card, { backgroundColor }]}>
//       <Icon name={job.icon} size={30} color="#000" style={styles.icon} />
//       <Text style={styles.title}>{job.title}</Text>
//       <Text style={styles.company}>{job.company}</Text>
//       <Text style={styles.location}>{job.location}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     padding: 16,
//     marginVertical: 8,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 16,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   company: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   location: {
//     fontSize: 14,
//     color: 'darkgray',
//   },
// });