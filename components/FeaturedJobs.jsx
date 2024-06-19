
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

export const FeaturedJobs = ({ job }) => {
    return (
        <TouchableOpacity>
            <View style={[styles.featuredCard, { display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center" }]}>
                <View style={{ backgroundColor: "white", borderRadius: 50}}>
                    <Image source={job.icon} style={{ height: 80, width: 80 }} />
                </View>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: 10}}>
                    <Text style={styles.title}>{job.title}</Text>
                    <Text style={styles.company}>{job.company}</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 7}}>
                    <Text style={styles.salary}>{job.salary}</Text>
                    <Text style={styles.location}>{job.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    featuredCard: {
        padding: 16,
        backgroundColor: 'white',
        marginVertical: 8,
        marginHorizontal: 5,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    title: {
        paddingBottom: 5,
        fontWeight: "bolder"
    },

    company: {
        marginTop: 10,
        paddingTop: 5,
        color: "whiteSmoke",
        opacity: 0.5
    },

    salary: {
        paddingBottom: 5,
        fontWeight: "bolder"
    },

    location: {
        marginTop: 7,
        paddingTop: 5,
        color: "whiteSmoke",
        opacity: 0.5
    }
    
})
