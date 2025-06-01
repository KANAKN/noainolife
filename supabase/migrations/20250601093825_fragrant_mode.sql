-- Add result_type column to quiz_responses if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public'
    AND table_name = 'quiz_responses' 
    AND column_name = 'result_type'
  ) THEN
    ALTER TABLE quiz_responses 
    ADD COLUMN result_type text;
  END IF;
END $$;