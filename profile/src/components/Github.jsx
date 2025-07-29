import React from 'react'
import { useEffect ,useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch('https://api.github.com/users/6829nkhpas')
                const userData = await userResponse.json()
                setData(userData)

                // Fetch repositories
                const reposResponse = await fetch('https://api.github.com/users/6829nkhpas/repos?sort=updated&per_page=10')
                const reposData = await reposResponse.json()
                
                // Fetch commit counts for each repo
                const reposWithCommits = await Promise.all(
                    reposData.map(async (repo) => {
                        try {
                            const commitsResponse = await fetch(`https://api.github.com/repos/6829nkhpas/${repo.name}/commits?per_page=1`)
                            const commitsData = await commitsResponse.json()
                            return {
                                ...repo,
                                commitCount: commitsData.length > 0 ? repo.stargazers_count : 0
                            }
                        } catch {
                            return {
                                ...repo,
                                commitCount: 0
                            }
                        }
                    })
                )
                
                setRepos(reposWithCommits)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchData()
    },[])

    if (loading) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4'>
                <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20 text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto'></div>
                    <p className='text-white mt-4'>Loading profile...</p>
                </div>
            </div>
        )
    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center p-4'>
        <div className='bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-4xl w-full border border-white/20'>
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

                {/* Repositories Section */}
                <div className='pt-8 border-t border-white/20'>
                    <h2 className='text-2xl font-bold text-white mb-6'>Recent Projects</h2>
                    <div className='grid gap-4 md:grid-cols-2'>
                        {repos.map((repo) => (
                            <div key={repo.id} className='bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors duration-200'>
                                <div className='flex items-start justify-between mb-2'>
                                    <h3 className='text-white font-semibold text-lg truncate'>{repo.name}</h3>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        repo.private ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
                                    }`}>
                                        {repo.private ? 'Private' : 'Public'}
                                    </span>
                                </div>
                                
                                {repo.description && (
                                    <p className='text-gray-300 text-sm mb-3 line-clamp-2'>{repo.description}</p>
                                )}
                                
                                <div className='flex items-center justify-between text-sm text-gray-400'>
                                    <div className='flex items-center space-x-4'>
                                        <div className='flex items-center space-x-1'>
                                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' />
                                            </svg>
                                            <span>{repo.language || 'N/A'}</span>
                                        </div>
                                        <div className='flex items-center space-x-1'>
                                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                            </svg>
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                        <div className='flex items-center space-x-1'>
                                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                                <path fillRule='evenodd' d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd' />
                                            </svg>
                                            <span>{repo.forks_count}</span>
                                        </div>
                                    </div>
                                    <a 
                                        href={repo.html_url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-400 hover:text-blue-300 transition-colors duration-200'
                                    >
                                        View →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Github