-- DropForeignKey
ALTER TABLE "Gernaration" DROP CONSTRAINT "Gernaration_voiceId_fkey";

-- AddForeignKey
ALTER TABLE "Gernaration" ADD CONSTRAINT "Gernaration_voiceId_fkey" FOREIGN KEY ("voiceId") REFERENCES "Voice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
