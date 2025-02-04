import { useCallback, useEffect, useState } from "react"
import { ITarefa, TarefasService } from "../../shared/services/tarefas/TarefasService";
import { ApiException } from "../../shared/services/ApiException";



export function DashBoard() {
  const [lista, setLista] = useState<ITarefa[]>([])

  useEffect(() => {
    TarefasService.getAll().then(
      (result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(result)
        }
      }
    )
  }, [])

  const handleInptuKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length == 0) return;

      const value = e.currentTarget.value

      if (lista.some((listaItem) => listaItem.title === value)) return;

      TarefasService.create({
        title: value,
        estaCompleta: false,
      }).then(
        (result) => {
          if (result instanceof ApiException) {
            alert(result.message)
          } else {
            setLista((oldItem) => [...oldItem, result])
          }
        }
      )
      e.currentTarget.value = ''
    }
  }, [lista])

  const handleToggleComplete = useCallback((id: number) => {
    const tarefaToUpdate = lista.find((item) => item.id === id)

    if (!tarefaToUpdate) return;

    TarefasService.updateById(id, {
      ...tarefaToUpdate,
      estaCompleta: !tarefaToUpdate.estaCompleta
    })
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(oldLista => {
            return oldLista.map((itemLista) => {
              if (itemLista.id === id) return result;
              return itemLista
            });
          });
        }
      })

  }, [lista])


  const handleDelete = useCallback((id: number) => {
    const tarefaToDelete = lista.find((item) => item.id === id)
    if (!tarefaToDelete) return;

    TarefasService.deleteById(id)
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(oldLista => {
            return oldLista.filter((item) => {
              return item.id !== id
            })
          })
        }
      })
  }, [lista])


  return (
    <div>
      <h2>Lista</h2>

      <input type="text"
        onKeyDown={handleInptuKeyDown}
      />
      <ul>
        {
          lista.map((value, index) => {
            return (
              <li key={index}>
                <input type="checkbox" checked={value.estaCompleta}
                  onChange={() => handleToggleComplete(value.id)} />
                {value.title}
                <button style={{ marginLeft: 10 }} onClick={() => handleDelete(value.id)}>Excluir</button>
              </li>)
          })
        }
      </ul>
    </div>
  )
}


