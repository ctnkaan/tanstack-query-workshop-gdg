import * as React from "react"
import PokemonCard from "@/components/PokemonCard"
import ButtonGroup from "@/components/ButtonGroup"

export default function App () {
  const [id, setId] = React.useState(1)
  const [pokemon, setPokemon] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleFetchPokemon = async () => {
      setLoading(true)
      setPokemon(null)

      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const json = await res.json()
        setPokemon(json)
      } catch (error) {
        console.error("Failed to fetch Pokemon:", error)
      } finally {
        setLoading(false)
      }
    }

    handleFetchPokemon()
  }, [id])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <div className="w-[280px] h-[450px] bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
              <span className="text-gray-400">Loading Pokémon #{id}...</span>
            </div>
          ) : (
            <PokemonCard data={pokemon}/>
          )}
          <ButtonGroup handleSetId={setId} />
          
          <div className="mt-10 text-center text-sm text-gray-500">
            <p>Current Pokémon ID: {id}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
