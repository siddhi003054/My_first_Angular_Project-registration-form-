import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://fngegzqrugnncsbqxbhh.supabase.co'; // 🔹 replace
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuZ2VnenFydWdubmNzYnF4YmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1ODg0MzYsImV4cCI6MjA3MTE2NDQzNn0.3qKz-vqTIsU4O2inpomIwuipPjmNdOWtZfzNXci_w1o';                // 🔹 replace
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async insertStudent(studentData: any) {
    const { data, error } = await this.supabase
      .from('students')   // 🔹 table name you created
      .insert([studentData]);

   if (error) {
      console.error('Insert Error:', error);
      throw error;
    }
    return data;
  }

  // ✅ Fetch all students
  async getStudents() {
    const { data, error } = await this.supabase
      .from('students')
      .select('*');

    if (error) {
      console.error('Fetch Error:', error);
      throw error;
    }
    return data;
  }
}
