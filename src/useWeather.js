import React from 'react'

export function useWeather() {
    const [weather, setWeather] = React.useState()

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function(position) {
            const response = await fetch(
                `http://www.7timer.info/bin/api.pl?lon=${position.coords.longitude}&lat=${position.coords.latitude}&product=astro&output=json`
            )

            const json = await response.json()

            setWeather(json.dataseries[new Date().getHours()])
        })
    }, [])

    return weather
}
