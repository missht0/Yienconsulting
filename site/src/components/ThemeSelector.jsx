import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'

const themes = [
  { name: 'CH', value: 'CH', icon: CHIcon },
  { name: 'JP', value: 'JP', icon: JPIcon },
]

function CHIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 880 880">
      <g id="中文" transform="translate(-64 -80)">
        <path id="路径_1" data-name="路径 1" d="M160,144a32,32,0,0,0-32,32V864a32,32,0,0,0,32,32H848a32,32,0,0,0,32-32V176a32,32,0,0,0-32-32Zm0-64H848a96,96,0,0,1,96,96V864a96,96,0,0,1-96,96H160a96,96,0,0,1-96-96V176a96,96,0,0,1,96-96Z" fill="#13227a" />
        <path id="路径_2" data-name="路径 2" d="M482.176,262.272h59.616v94.4h196V595.744h-196V780.16H482.176V595.744H286.72V356.7H482.176V262.24Zm-137.5,277.152h137.5v-126.4H344.64v126.4Zm197.12,0H679.84v-126.4H541.76v126.4Z" fill="#1296db" />
      </g>
    </svg>
  )
}

function JPIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 880 880">
      <g id="日文" transform="translate(-64 -80)">
        <path id="路径_1" data-name="路径 1" d="M160,144a32,32,0,0,0-32,32V864a32,32,0,0,0,32,32H848a32,32,0,0,0,32-32V176a32,32,0,0,0-32-32Zm0-64H848a96,96,0,0,1,96,96V864a96,96,0,0,1-96,96H160a96,96,0,0,1-96-96V176a96,96,0,0,1,96-96Z" fill="#13227a" />
        <path id="路径_2" data-name="路径 2" d="M579.073,370.474H803.72V791.236h-517V370.53H510.744ZM353.105,708.114H510.744V457.944H353.105l-.037,250.17Zm225.967,0H737.3V457.944H579.073l-.037,250.17Z" transform="translate(1084.855 -25.22) rotate(90)" fill="#1296db" />
      </g>
    </svg>

  )
}



export function ThemeSelector(props) {
  let [selectedTheme, setSelectedTheme] = useState({ name: 'CH', value: 'CH', icon: CHIcon })

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...props}
    >
      <Listbox.Button
        className="flex h-12 w-12 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5"
      >
        {

          sessionStorage.getItem('lang') == "JP" ? <JPIcon className="hidden h-8 w-8 fill-sky-400 " /> : <CHIcon className="hidden h-8 w-8 fill-sky-400 " />

        }
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {themes.map((theme) => (
          <Listbox.Option
            onClick={() => { sessionStorage.setItem('lang', theme.value); window.location.reload(); }}
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-sky-500': selected,
                  'text-slate-900 ': active && !selected,
                  'text-slate-700 ': !active && !selected,
                  'bg-slate-100 ': active,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
                  <theme.icon
                    className={clsx(
                      'h-8 w-8',
                      selected
                        ? 'fill-sky-400 dark:fill-sky-400'
                        : 'fill-slate-400'
                    )}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
