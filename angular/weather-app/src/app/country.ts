export interface Country {
    image:string,
    name:string,
    time:string
}

export interface JSONResponse{
    cod: string, message: number, cnt: number, list: [], city:string
}

export interface list{
clouds: Object,
dt: number,
dt_txt: string,
main: main,
weather:Weather[],
wind:Object
}
export interface Weather{
description: string,
icon: string,
id: number,
main: main
}

export interface main{
    feels_like
: 
number
grnd_level
: 
number
humidity
: 
number
pressure
: 
number
sea_level
: 
number
temp
: 
number
temp_kf
: 
number
temp_max
: 
number
temp_min
: 
number

}

export interface link{
    '_links':cities
}

export interface cities{
    'curies':{}
    'ua:item':cityInfo[]

}
export interface cityInfo{
    "href":string,
    "name":string

}
export interface Areas{
    curies:{},
    photos:photos[]
}

export interface photos{
    attribution:{},
    image:image

}

export interface image{
    web:string,
    mobile:string
}

export interface locationInfo{
    image:string,
    name:string

}