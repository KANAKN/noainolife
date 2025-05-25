/*
  # Quiz Response Tables

  1. New Tables
    - `quiz_responses`
      - `id` (uuid, primary key)
      - `age_group` (text)
      - `gender` (text)
      - `created_at` (timestamp)
    - `quiz_answers`
      - `id` (uuid, primary key)
      - `response_id` (uuid, foreign key)
      - `question_id` (integer)
      - `selected_type` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for inserting data
*/

-- Create quiz_responses table
CREATE TABLE IF NOT EXISTS quiz_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  age_group text NOT NULL,
  gender text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create quiz_answers table
CREATE TABLE IF NOT EXISTS quiz_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  response_id uuid REFERENCES quiz_responses(id) ON DELETE CASCADE,
  question_id integer NOT NULL,
  selected_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE quiz_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow anonymous quiz response insertion" 
  ON quiz_responses FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous quiz answer insertion" 
  ON quiz_answers FOR INSERT 
  TO anon
  WITH CHECK (true);