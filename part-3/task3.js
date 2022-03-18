// Program 1: Match Checker

const manProfiles = [
  { name: "Ethan", hobbies: ["cooking", "travelling", "singing", "reading"] },
  {
    name: "Jacob",
    hobbies: ["skydiving", "rock climbing", "surfing", "hiking"],
  },
  { name: "Caleb", hobbies: ["traveling", "swimming", "gardening", "singing"] },
  { name: "Aaron", hobbies: ["cycling", "reading", "painting", "yoga"] },
  { name: "Isaac", hobbies: ["dancing", "surfing", "cooking", "swimming"] },
];

const womanProfiles = [
  { name: "Amy", hobbies: ["gardening", "cooking", "singing", "crafting"] },
  { name: "Jessica", hobbies: ["yoga", "dancing", "traveling", "cooking"] },
  { name: "Emely", hobbies: ["hiking", "cycling", "singing", "swimming"] },
  {
    name: "Michelle",
    hobbies: ["running", "gardening", "cooking", "watching movies"],
  },
  { name: "Claire", hobbies: ["surfing", "swimming", "diving", "kayaking"] },
];

const getManProfile = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let man = manProfiles.find(
        (profile) => name.toLowerCase() === profile.name.toLowerCase()
      );

      if (man) {
        resolve(man);
      } else {
        reject(new Error("Man's profile not found"));
      }
    }, 2000);
  });

const getWomanProfile = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let woman = womanProfiles.find(
        (profile) => name.toLowerCase() === profile.name.toLowerCase()
      );

      if (woman) {
        resolve(woman);
      } else {
        reject(new Error("Woman's profile not found"));
      }
    }, 1000);
  });

const checkHobbies = (manHobbies, womanHobbies) =>
  new Promise((resolve, reject) => {
    let sameHobbies = manHobbies.filter((hobby) =>
      womanHobbies.includes(hobby)
    );

    if (sameHobbies.length > 1) {
      resolve({ msg: "Perfect match!", sameHobbies });
    } else if (sameHobbies.length > 0) {
      resolve({ msg: "It's a match!", sameHobbies });
    } else {
      reject("No match at all :(");
    }
  });

async function checkMatch(manName, womanName) {
  try {
    let manProfile = await getManProfile(manName);
    let womanProfile = await getWomanProfile(womanName);
    let matchResult = await checkHobbies(
      manProfile.hobbies,
      womanProfile.hobbies
    );

    console.log(
      `${matchResult.msg} Your same hobbies: ${matchResult.sameHobbies}`
    );
  } catch (error) {
    console.log(error);
  }
}

// men: ethan, jacob, caleb, aaron, isaac
// woman: amy, jessica, emely, michelle, claire
checkMatch("john", "emely");

// Program 2: Random Chat Response

const chatResponses = [
  "Eh gimana gimana?",
  "Oh",
  "Oh gitu ya",
  "Mantappp",
  "Y",
  "Hehe",
  "Anjaaayyy",
  "Apaan sih",
  "Kok bisa?",
  "Wkwkwk",
  "Siapa ya?",
];

const getChatResponse = (chat) =>
  new Promise((resolve, reject) => {
    console.log(chat);

    setTimeout(() => {
      let error = Math.round(Math.random());
      let n = Math.floor(Math.random() * chatResponses.length);
      let chatResponse = chatResponses[n];

      if (!error) {
        resolve(chatResponse);
      } else {
        reject(new Error("Service unavailable right now"));
      }
    }, Math.random() * 3001 + 1000);
  });

getChatResponse("Hei kamu")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
