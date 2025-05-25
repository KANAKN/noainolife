/*
  # Fix RLS Policies for Quiz Tables

  1. Changes
    - Add SELECT policies for both tables
    - Update INSERT policies to be more explicit
    - Ensure anonymous users can both read and write data

  2. Security
    - Maintain RLS enabled on both tables
    - Allow anonymous access for public quiz functionality
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anonymous quiz response insertion" ON quiz_responses;
DROP POLICY IF EXISTS "Allow anonymous quiz answer insertion" ON quiz_answers;

-- Create new policies for quiz_responses
CREATE POLICY "Enable read access for all users" 
  ON quiz_responses FOR SELECT 
  TO anon
  USING (true);

CREATE POLICY "Enable insert access for all users" 
  ON quiz_responses FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create new policies for quiz_answers
CREATE POLICY "Enable read access for all users" 
  ON quiz_answers FOR SELECT 
  TO anon
  USING (true);

CREATE POLICY "Enable insert access for all users" 
  ON quiz_answers FOR INSERT 
  TO anon
  WITH CHECK (true);