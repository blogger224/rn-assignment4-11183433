// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import JobCard from '../components/JobCard';
import { FeaturedJobs } from '../components/FeaturedJobs';
import search from "../assets/Icons/search.png";
import facebook from "../assets/Icons/facebook.png";
import google from "../assets/Icons/google.png";
import apple from "../assets/Icons/apple.png";
import amazon from "../assets/Icons/amazon.png";
import ebay from "../assets/Icons/ebay.png";
import burger from "../assets/Icons/burger.png";
import slide from "../assets/Icons/slide.png"

const popularJobs = [
    { id: '1', title: 'Software Engineer', company: 'ABC Corp', location: 'New York, NY', backgroundColor: '#FFCDD2', icon: facebook, salary: '$120,000' },
    { id: '2', title: 'Product Manager', company: 'XYZ Inc', location: 'San Francisco, CA', backgroundColor: '#C8E6C9', icon: amazon, salary: '$130,000' },
    { id: '3', title: 'Graphic Designer', company: 'Creative Studio', location: 'Los Angeles, CA', backgroundColor: '#BBDEFB', icon: ebay, salary: '$70,000' },
    { id: '4', title: 'Data Analyst', company: 'Data Corp', location: 'Chicago, IL', backgroundColor: '#FFECB3', icon: google, salary: '$90,000' },
    { id: '5', title: 'HR Specialist', company: 'Human Resources', location: 'Miami, FL', backgroundColor: '#FFCDD2', icon: apple, salary: '$80,000' },
    { id: '6', title: 'Marketing Manager', company: 'Marketing Solutions', location: 'Seattle, WA', backgroundColor: '#C8E6C9', icon: google, salary: '$110,000' },
    { id: '7', title: 'Sales Executive', company: 'Sales Inc', location: 'Denver, CO', backgroundColor: '#BBDEFB', icon: amazon, salary: '$100,000' },
    { id: '8', title: 'Customer Support', company: 'Support LLC', location: 'Austin, TX', backgroundColor: '#FFECB3', icon: amazon, salary: '$60,000' },
];

const featuredJobs = [
    { id: '1', title: 'Data Scientist', company: 'Tech Solutions', location: 'Austin, TX', backgroundColor: '#BBDEFB', icon: burger, salary: '$150,000/year' },
    { id: '2', title: 'UX Designer', company: 'Design Studio', location: 'Seattle, WA', backgroundColor: '#FFECB3', icon: amazon, salary: '$90,000/year' },
    { id: '3', title: 'Project Manager', company: 'Project Pros', location: 'New York, NY', backgroundColor: '#FFCDD2', icon: ebay, salary: '$110,000/year' },
    { id: '4', title: 'Backend Developer', company: 'Web Works', location: 'San Francisco, CA', backgroundColor: '#C8E6C9', icon: google, salary: '$130,000/year' },
    { id: '5', title: 'Financial Analyst', company: 'Finance Corp', location: 'Chicago, IL', backgroundColor: '#BBDEFB', icon: facebook, salary: '$95,000/year' },
    { id: '6', title: 'Operations Manager', company: 'Operations Inc', location: 'Los Angeles, CA', backgroundColor: '#FFECB3', icon: 'build', salary: '$105,000/year' },
    { id: '7', title: 'Business Analyst', company: 'Business Solutions', location: 'Miami, FL', backgroundColor: '#FFCDD2', icon: 'analytics', salary: '$100,000/year' },
    { id: '8', title: 'Mobile Developer', company: 'Mobile Apps', location: 'Denver, CO', backgroundColor: '#C8E6C9', icon: 'smartphone', salary: '$120,000/year' },
];

export default function HomeScreen({ route }) {
    const { name, email } = route.params;

    return (
        <View style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 15}}>
                <View>
                    <Text style={styles.header}> {name}</Text>
                    <Text style={styles.subheader}> {email}</Text>
                </View>
                <View style={{ backgroundColor: "white", padding: 20, borderRadius: 50 }}>
                    <Image source={facebook} style={{ height: 40, width: 40 }} />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search a job or position"
                        placeholderOpacity="0.5"
                    />
                    <Image style={styles.searchIcon} source={search} />
                </View>

                <View style={styles.toggleSlider}>
                    {/* <Image style={styles.sliderImg}
            source={slider}
          /> */}

                    <TouchableOpacity
                        onPress={() => alert("Button Pressed!")}
                    >
                        <Image
                            source={slide}
                            style={styles.buttonImg}
                        />
                    </TouchableOpacity>
                </View>


            </View>

            <View style={{ marginTop: 60 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.sectionTitle}>Featured Jobs</Text>
                <Text style={{ opacity: 0.5, marginTop: 26 }}>See All</Text>
                </View>

                <FlatList
                    horizontal
                    data={popularJobs}
                    renderItem={({ item }) => <JobCard job={item} backgroundColor={item.backgroundColor} />}
                    keyExtractor={(item) => item.id}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={styles.sectionTitle}>Popular Jobs</Text>
                    <Text style={{ marginTop: 26 }}>See All</Text>
                </View>

                <FlatList
                    data={featuredJobs}
                    renderItem={({ item }) => <FeaturedJobs job={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 18,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 26,
    },


    searchContainer: {
        marginVertical: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    input: {
        height: 70,
        width: 260,
        marginTop: 25,
        paddingVertical: 20,
        paddingLeft: 55,
        backgroundColor: "white",
        borderRadius: 15,
        fontWeight: "700",
        border: 1,
    },

    searchBox: {
        position: "relative",
    },

    searchIcon: {
        width: 28,
        height: 28,
        postion: "absolute",
        top: -40,
        left: 11,
    },

    toggleSlider: {
        width: 55,
        height: 54,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 22,
        color: "#ffff",
    },

    buttonImg: {
        width: 34,
        height: 34,
        marginTop: 10,
        marginHorizontal: 10,
        color: "#ffff",
    }
});