import { create } from 'zustand';
import api from '../api/computerApi';

interface Computer {
  id: string;
  classroomId: string;
  studentName: string;
  grade: string;
}

interface ComputerStore {
  computers: Computer[];
  loading: boolean;
  error: string | null;
  addComputer: (computer: Computer) => Promise<void>;
  removeComputer: (id: string, classroomId: string) => Promise<void>;
  fetchComputers: (classroomId: string) => Promise<void>;
}

const useComputerStore = create<ComputerStore>()((set) => ({
  computers: [],
  loading: false,
  error: null,

  addComputer: async (computer) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post('/', computer);
      set((state) => ({
        computers: [...state.computers, response.data],
        loading: false
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
        loading: false
      }));
    } catch (error) {
      set({ error: 'Error al eliminar computadora', loading: false });
    }
  },

  fetchComputers: async (classroomId) => {
    try {
      set({ loading: true, error: null });
      const response = await api.get(`/${classroomId}`);
      set({ computers: response.data, loading: false });
    } catch (error) {
      set({ error: 'Error al cargar computadoras', loading: false });
    }
  }
}));

export default useComputerStore;