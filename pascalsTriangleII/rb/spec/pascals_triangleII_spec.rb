# in spec/calculator_spec.rb
# - RSpec adds ./lib to the $LOAD_PATH
require_relative "../lib/pascals_triangleII"

RSpec.describe PascalsTriangle do
    describe '#get_row' do
        it 'returns [1] when given rowIdx = 0' do
            expect(PascalsTriangle.new.get_row(0)).to eq([1])
        end
    end
end