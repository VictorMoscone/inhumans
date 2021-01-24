// This is a placeholder array of objects that would normally be fetched from our DB.
const actorsList = [
    actor1 = {
        id: 1,
        firstName: "Black",
        lastName: "Bolt",
    },
    actor2 = {
        id: 2,
        firstName: "Medusa",
        lastName: ""
    },
    actor3 = {
        id: 3,
        firstName: "Karnak",
        lastName: "the Shatterer"
    },
    actor4 = {
        id: 4,
        firstName: "Crystal",
        lastName: ""
    },
    actor5 = {
        id: 5,
        firstName: "Lockjaw",
        lastName: ""
    }
];

// This is a placeholder array of objects that would normally be fetched from our DB.
const roomList = [
    room1 = {
        id: 1,
        roomName: "Agon's Tower",
        adjacentTo: [2,3,4],
    },
    room2 = {
        id: 2,
        roomName: "Pit of the Dead",
        adjacentTo: [1,3,5],
    },
    room3 = {
        id: 3,
        roomName: "The Palace",
        adjacentTo: [1,2,4,5],
    },
    room4 = {
        id: 4,
        roomName: "Old Attilan Harbor",
        adjacentTo: [1,3,5],
    },
    room5 = {
        id: 5,
        roomName: "Terrigen Lab",
        adjacentTo: [2,3,4],
    }
];

const simStart = () => {
    const isKiller = actorsList[rng(0, actorsList.length)];
    const murderRoom = roomList[rng(0, roomList.length)];
    console.log(`${isKiller.firstName} ${isKiller.lastName} has commited a murder in ${murderRoom.roomName}!`)
};

const rng = (min, max) => {
    return Math.floor(Math.random()*max) + min;
};

simStart();