// YOUR CODE BELOW
function allSystemsGo(systems)
{
    for(let key in systems)
    {
        let value = systems[key];
        if(typeof value === 'object')
        {
            let subValue = allSystemsGo(value);
            if(!subValue)
            {
                return false;
            }
        }
        if(!value)
        {
            return false;
        }
    }
    return false;
}

console.log(allSystemsGo(systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  }));