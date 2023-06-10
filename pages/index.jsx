// import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image: "https://i.imgur.com/WMIRarf.jpg",
//     address: "10019, New York, United States",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image: "https://i.imgur.com/WMIRarf.jpg",
//     address: "10019, New York, United States",
//     description: "This is a second meetup!",
//   },
// ];

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

//每一個請求都更新
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://cycivs07:nOuSNsfYTvTFQHiZ@cluster0.w6rfo7r.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1,
  };
}

export default HomePage;
