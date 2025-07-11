import { SearchIcon } from 'lucide-react'
import React from 'react'
import { useSearch } from '../providers/SearchProvider';

export default function Search() {
    const { setSearch } = useSearch(); // traés la función para actualizar

    return (
        <label className='flex w-full bg-gray-800 p-2 gap-2 items-center rounded'>
            <SearchIcon />
            <input
                onChange={(e) => setSearch(e.target.value)}
                className='h-full bg-inherit outline-none w-full text-white placeholder:text-gray-400'
                placeholder='Buscar...'
            />
        </label>
    )
}
