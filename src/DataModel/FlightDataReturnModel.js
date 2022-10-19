export class FlightDataReturnModel {
    constructor(flightNumber, gate, originOrDestination, direction, aircraft, departureOrArrivalTime, reg, livery){
        this.flightNumber = flightNumber;
        this.gate = gate;
        this.originOrDestination = originOrDestination;
        this.direction = direction;
        this.aircraft = aircraft;
        this.departureOrArrivalTime = departureOrArrivalTime;
        this.reg = reg;
        this.livery = livery;
    }
}

export const FlightDataTableColumnsModel = [
    {
        title: "Flight Number",
        field: "flightNumber",
    },
    {
        title: "Gate",
        field: "gate",
    },
    {
        title: "Airport",
        field: "originOrDestination",
    },
    {
        title: "Direction",
        field: "direction",
    },
    {
        title: "Aircraft",
        field: "aircraft",
    },
    {
        title: "Time",
        field: "departureOrArrivalTime",
    },
    {
        title: "Registration",
        field: "reg",
    },
    {
        title: "Livery",
        field: "livery",
    }
]

