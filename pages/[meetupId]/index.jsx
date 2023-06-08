import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://i.imgur.com/WMIRarf.jpg"
        title="A First Meetup"
        address="10019, New York, United States"
        description="This is a first meetup!"
      />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: []
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:'',
        title: '',
        address: '',
        description: '',
      }
    }
  }
}

export default MeetupDetails