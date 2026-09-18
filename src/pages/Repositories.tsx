import { useEffect, useState } from 'react'
import Section from '../components/Section'
import { GitHubIcon } from '../components/SocialIcons'

const GITHUB_USER = 'suzukiyo'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  updated_at: string
}

type State =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; repos: Repo[] }

export default function Repositories() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        return res.json() as Promise<Repo[]>
      })
      .then((repos) => {
        setState({ status: 'ready', repos: repos.filter((r) => !r.fork) })
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error' })
      })

    return () => controller.abort()
  }, [])

  return (
    <Section id="repositories" title="Repositories">
      <p className="text-center text-sm text-gray-400">
        GitHub (
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noreferrer"
          className="text-brand-400 hover:underline"
        >
          @{GITHUB_USER}
        </a>
        ) の公開リポジトリをリアルタイムに表示しています。
      </p>

      {state.status === 'loading' && (
        <p className="text-center text-gray-500">読み込み中...</p>
      )}

      {state.status === 'error' && (
        <p className="text-center text-gray-500">
          リポジトリの取得に失敗しました。
          <a
            href={`https://github.com/${GITHUB_USER}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-brand-400 hover:underline"
          >
            GitHubで直接見る
          </a>
        </p>
      )}

      {state.status === 'ready' && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {state.repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="block h-full rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-brand-400/50 hover:bg-white/10"
              >
                <div className="flex items-center gap-2 font-bold text-white">
                  <GitHubIcon className="h-4 w-4 shrink-0 text-gray-400" />
                  <span className="truncate">{repo.name}</span>
                </div>
                <p className="mt-2 min-h-10 text-sm text-gray-400">
                  {repo.description ?? '説明はありません'}
                </p>
                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
