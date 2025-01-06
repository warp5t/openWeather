import React, { useState, useEffect } from 'react';
import { WeatherResponse, Main } from '../logic/typing/response';

import wind from '../images/wind.png'
import therm from '../images/thermometer.png'
import vault from '../images/pngegg.png'
import pressure from '../images/atmospheric.png'
import humidity from '../images/humidity.png'
import compass from '../images/compass.png'
import direction from '../images/direction.png'
import gust from '../images/gust.png'
import clouds from '../images/clouds.png'
import sunset from '../images/sunset.png'
import sunrise from '../images/sunrise.png'

function convertTimestamp(unixTimestamp: number, timeZone?: string) {
  const date = new Date(unixTimestamp * 1000);
  const userTimeZone = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone;
  return date.toLocaleTimeString('en-US', { timeZone: userTimeZone, hour12: false });
}

function convertTimestampToFullDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('default', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
  });
}

interface FetchDataProps {
  url: string;
}

const FetchData: React.FC<FetchDataProps> = ({ url }) => {
  const [posts, setPosts] = useState<WeatherResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: WeatherResponse = await response.json();
        setPosts([data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* <div className='text-xl'>{JSON.stringify(posts)}</div> */}
      <h1 className='text-center'>Weather Data for {posts[0]?.name}</h1>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <div>
              <div className='flex flex-col items-center'>
              <strong> {convertTimestampToFullDate(post.dt)}</strong>
              <strong className='text-xl font-normal'> {(post.weather[0].description).toUpperCase()} </strong>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl'>Main Metrics:</h2>
              <div className='flex items-end w-full justify-around'>
                <div className='flex items-end'>
                <div className='mr-[40px]'>
                   <div>
                    <img className='w-[50px]' src={therm} alt="icon" />
                  </div>
                <div className='flex'>
                  <div className='font-bold '>{post.main.temp} <span className='font-normal'>°C</span></div>
                </div>
                </div>
                 <div className='mr-[40px]'>
                  <img className='w-[100px]' src={vault} alt="vault" />
                  <div className='font-bold'>Feels Like: {post.main.feels_like} <span className='font-normal'>°C</span></div>
                  </div>
                  <div className='flex flex-col items-center mr-[40px]'>
                    <img className='w-[70px]' src={pressure} alt="pressure" />
                    <div className='font-bold'>{post.main.grnd_level}</div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img className='w-[70px]' src={humidity} alt="humidity" />
                    <div className='font-bold'>{post.main.humidity}</div>
                  </div>
                </div>
              </div>
                {/* {JSON.stringify(post.main)} */}

            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl'>Wind:</h2>
              <div className='flex items-end w-full justify-around'>
              <div className='flex flex-col items-center mr-[40px]'>
                <img className='w-[50px]' src={wind} alt="icon" />
                <div className='font-bold'>Speed: {post.wind.speed} <span className='font-normal'>m/s</span></div>
              </div>
              <div className="flex flex-col items-center mr-[40px]">
                <div className="relative">
                  <img className="w-[100px] relative" src={compass} alt="compass" />
                  <div className="w-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    style={{ transform: `rotate(${post.wind.deg-90}deg)` }}
                    src={direction}
                    alt="arrow"
                  />
                  </div>
                </div>
                <div className="font-bold">
                  Direction: {post.wind.deg} <span className="font-normal">°</span>
                </div>
              </div>
             {post.wind.gust && <div className='font-bold'>
              <img className='w-[80px]' src={gust} alt="gust" />
              <p>Gust: {post.wind.gust} <span className='font-normal'>m/s</span></p>
              </div> }
              </div>
            </div>

            <div className='flex flex-col items-center'>
              <img className='w-[50px]' src={clouds} alt="icon" />
              <div className='font-bold'>Clouds: {post.clouds.all} <span className='font-normal'>%</span></div>
            </div>

            <div className='flex flex-col items-center'>
              <p>Country: <span className='font-bold'>{post.sys.country}</span></p>
              <div className='flex'>
                <div className='flex flex-col items-center'>
                    <img src={sunrise} alt="sunrise" />
                    <p>{convertTimestamp(post.sys.sunrise)}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={sunset} alt="sunset" />
                    <p>{convertTimestamp(post.sys.sunset)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;