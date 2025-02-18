import { create } from 'zustand';
import api from '../api/computerApi';
import { Computer } from '../type';

interface ComputerStore {
  computers: Computer[];
  loading: boolean;
  error: string | null;
  addComputer: (computer: Computer) => Promise<void>;
  removeComputer: (id: string, classroomId: string) => Promise<void>;
  fetchComputers: (classroomId: string) => Promise<void>;
  searchComputer: (params: { id?: string; studentName?: string }) => Promise<Computer | null>;
}

const useComputerStore = create<ComputerStore>((set, get) => ({
  computers: [],
  loading: false,
  error: null,

 addComputer: async (computer) => {
  try {
    set({ loading: true, error: null });
    const response = await api.post<Computer>('/', computer);
    console.log("Respuesta al agregar computadora:", response.data); 
    set((state) => ({
      computers: [...state.computers, response.data],
      loading: false,
    }));
  } catch (error) {
    set({ error: 'Error al agregar computadora', loading: false });
  }
},


  removeComputer: async (id, classroomId) => {
    try {
      set({ loading: true, error: null });
      await api.delete('/', { data: { id, classroomId } });
      set((state) => ({
        computers: state.computers.filter((c) => c.id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: 'Error al eliminar computadora', loading: false });
    }
  },

  fetchComputers: async (classroomId) => {
    try {
      set({ loading: true, error: null });
      const response = await api.get<Computer[]>(`/${classroomId}`);
      set({ computers: response.data, loading: false });
    } catch (error) {
      console.error(error); 
      set({ error: 'Error al cargar computadoras', loading: false });
    }
  },

  searchComputer: async (params) => {
    try {
      set({ loading: true, error: null });
      const queryParams = new URLSearchParams(params as Record<string, string>).toString();
      const response = await api.get<Computer>(`/search?${queryParams}`);
      console.log("Respuesta de búsqueda de computadora:", response.data); 
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ error: 'Error al buscar computadora', loading: false });
      return null;
    }
  },
  
  
}));

export default useComputerStore;
