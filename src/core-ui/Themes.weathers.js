import defaultWeatherImage from "../assets/images/weather/default.webp";
import cloudsImage from "../assets/images/weather/clouds.webp";
import drizzleImage from "../assets/images/weather/drizzle.webp";
import snowImage from "../assets/images/weather/snow.webp";
import rainImage from "../assets/images/weather/rain.webp";
import fogImage from "../assets/images/weather/misty.webp";
import hazeImage from "../assets/images/weather/haze.webp";
import mistImage from "../assets/images/weather/misty.webp";
import smokeImage from "../assets/images/weather/smoke.webp";
import clearImage from "../assets/images/weather/default.webp";
import thunderstormImage from "../assets/images/weather/thunderstorm.webp";

export const colorPallete = {
    default: "#196480",
    clouds: "#eaf4fb",
	drizzle: "#fff",
    snow: "#076aac",
    mist: "#3b7689",
    rain: "#261B53",
    clear: "#917522",
    thunder: "#E6924C",
    smoke: "#49799e",
    fog: "#3b7689",
    haze: "#E1B49F",
}

export const defaultWeather = {
    name: "defaultWeather",
    colors: {
        background: `url(${defaultWeatherImage})`,
        color: `${colorPallete.default}`,
        iconBg: `${colorPallete.default}`,
    }
}

export const clouds = {
    name: "clouds",
    colors: {
        background: `url(${cloudsImage})`,
        color: `${colorPallete.clouds}`,
        iconBg: `${colorPallete.clouds}`,
    }
    
}

export const rain = {
    name: "rain",
    colors: {
        background: `url(${rainImage})`,
        color: `${colorPallete.rain}`,
        iconBg: `${colorPallete.rain}`,
    }
}
export const clear = {
    name: "clear",
    colors: {
        background: `url(${clearImage})`,
        color: `${colorPallete.clear}`,
        iconBg: `${colorPallete.clear}`,
    }
}
export const thunderstorm = {
    name: "thunderstorm",
    colors: {
        background: `url(${thunderstormImage})`, 
        color: `${colorPallete.thunder}`,
        iconBg: `${colorPallete.thunder}`,
    }
}
export const drizzle = {
    name: "drizzle",
    colors: {
        background: `url(${drizzleImage})`, 
        color: `${colorPallete.drizzle}`,
        iconBg: `${colorPallete.drizzle}`,
    }
}
export const snow = {
    name: "snow",
    colors: {
        background: `url(${snowImage})`, 
        color: `${colorPallete.snow}`, 
        iconBg: `${colorPallete.snow}`,
    }
}
export const mist = {
    name: "mist",
    colors: {
        background: `url(${mistImage})`, 
        color: `${colorPallete.mist}`,
        iconBg: `${colorPallete.mist}`,
    }
}

export const smoke = {
    name: "smoke",
    colors: {
        background: `url(${smokeImage})`,
        color: `${colorPallete.smoke}`,
        iconBg: `${colorPallete.smoke}`,
    }
}
export const fog = {
    name: "fog",
    colors: {
        background: `url(${fogImage})`,
        color: `${colorPallete.fog}`,
        iconBg: `${colorPallete.fog}`,
    }
}

export const haze = {
    name: "haze",
    colors: {
        background: `url(${hazeImage})`,
        color: `${colorPallete.haze}`,
        iconBg: `${colorPallete.haze}`,
    }
}