// import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://i.imgur.com/WMIRarf.jpg",
    address: "10019, New York, United States",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://i.imgur.com/WMIRarf.jpg",
    address: "10019, New York, United States",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // }, [])
  return (
      // <MeetupList meetups={loadedMeetups} />
      <MeetupList meetups={props.meetups} />
  );
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage