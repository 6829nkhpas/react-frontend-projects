import React from 'react'
import { useEffect ,useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/6829nkhpas')
        .then((response)=>response.json())
        .then((data)=>{setData(data);console.log(data)})
        .catch((error)=>console.log(error))
    },[])
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4'>
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20'>
            <div className='text-center space-y-6'>
                {/* Avatar */}
                <div className='relative'>
                    <img 
                        src={data.avatar_url} 
                        alt="Github Profile" 
                        className='w-32 h-32 rounded-full mx-auto border-4 border-white/30 shadow-lg'
                    />
                    <div className='absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white'></div>
                </div>
                
                {/* Name */}
                <div>
                    <h1 className='text-3xl font-bold text-white mb-2'>{data.name || 'Loading...'}</h1>
                    <p className='text-gray-300 text-lg'>@{data.login}</p>
                </div>
                
                {/* Bio */}
                {data.bio && (
                    <p className='text-gray-300 text-center leading-relaxed'>{data.bio}</p>
                )}
                
                {/* Stats */}
                <div className='grid grid-cols-2 gap-4 pt-4'>
                    <div className='bg-white/10 rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold text-white'>{data.public_repos || 0}</div>
                        <div className='text-gray-300 text-sm'>Repositories</div>
                    </div>
                    <div className='bg-white/10 rounded-lg p-4 text-center'>
                        <div className='text-2xl font-bold text-white'>{data.followers || 0}</div>
                        <div className='text-gray-300 text-sm'>Followers</div>
                    </div>
                </div>
                
                {/* Location */}
                {data.location && (
                    <div className='flex items-center justify-center space-x-2 text-gray-300'>
                        <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                            <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                        </svg>
                        <span>{data.location}</span>
                    </div>
                )}
                
                {/* Social Links */}
                <div className='flex justify-center space-x-4 pt-4'>
                    {data.blog && (
                        <a 
                            href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2'
                        >
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z' clipRule='evenodd' />
                            </svg>
                            <span>Website</span>
                        </a>
                    )}
                    
                    {data.twitter_username && (
                        <a 
                            href={`https://twitter.com/${data.twitter_username}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2'
                        >
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                            </svg>
                            <span>Twitter</span>
                        </a>
                    )}
                </div>
                
                {/* GitHub Profile Link */}
                <a 
                    href={data.html_url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium'
                >
                    View GitHub Profile
                </a>
            </div>
        </div>
    </div>
  )
}

export default Github