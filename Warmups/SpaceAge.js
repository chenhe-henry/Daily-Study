// Given an age in seconds, calculate how old someone would be on the following planets:

// Earth: orbital period 365.25 Earth days
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// So if you were told someone were 1,000,000,000 seconds old, you should be able to say:

// You are 31.68808781402895 Earth-years old
// You are 131.56953287725742 Mercury-years old
// You are 51.50882468824545 Venus-years old
// You are 16.848054878116695 Mars-years old
// You are 2.6712565327315225 Jupiter-years old
// You are 1.0760876124018737 Saturn-years old
// You are 0.37716350140100413 Uranus-years old
// You are 0.1922922142624317 Neptune-years old
// There are 31557600 seconds in an Earth year.

// Bonus:
// Have the option of either returning the ages on all planets, or any of the above planets individually.

const spaceAge = (num, str) => {
  const EarthSecondsPerYear = 365.25 * 24 * 3600;
  const secondsPerYear = {
    Earth: EarthSecondsPerYear,
    Mercury: 0.2408467 * EarthSecondsPerYear,
    Venus: 0.61519726 * EarthSecondsPerYear,
    Mars: 1.8808158 * EarthSecondsPerYear,
    Jupiter: 11.862615 * EarthSecondsPerYear,
    Saturn: 29.447498 * EarthSecondsPerYear,
    Uranus: 84.016846 * EarthSecondsPerYear,
    Neptune: 164.79132 * EarthSecondsPerYear,
  };

  if (str) {
    console.log(`You are ${num / secondsPerYear[str]} ${str}-years old`);
  } else {
    for (let plante in secondsPerYear) {
      console.log(`You are ${num / secondsPerYear[plante]}-years old`);
    }
  }
};

spaceAge(1000000000);
spaceAge(1000000000, "Earth");
spaceAge(1000000000, "Uranus");
