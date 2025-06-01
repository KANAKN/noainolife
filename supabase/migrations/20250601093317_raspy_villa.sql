/*
  # Add result_type column to quiz_responses table

  1. Changes
    - Add `result_type` column to `quiz_responses` table
      - Type: text
      - Nullable: true (to maintain compatibility with existing records)

  2. Security
    - No changes to RLS policies needed as the existing policies will cover the new column
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'quiz_responses' 
    AND column_name = 'result_type'
  ) THEN
    ALTER TABLE quiz_responses 
    ADD COLUMN result_type text;
  END IF;
END $$;